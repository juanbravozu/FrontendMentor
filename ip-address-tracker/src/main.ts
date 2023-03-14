import { Map, Marker, TileLayer, latLng } from "leaflet";
import { API_KEY, BASE_URL } from "./config";

interface locationData {
  city: string;
  country: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
}

interface ipAddressData {
  ip: string;
  isp: string;
  location: locationData;
}

const loader = document.querySelector('.loader') as HTMLElement;
loader.remove();
const form = document.querySelector('#ip-address');
const ipText = document.querySelector('#ip-text') as HTMLElement;
const locationText = document.querySelector('#location-text') as HTMLElement;
const timezoneText = document.querySelector('#timezone-text') as HTMLElement;
const ispText = document.querySelector('#isp-text') as HTMLElement;
const map = new Map('map', {
  zoomControl: false
});
map.setView(latLng(0, 0), 13);
const layer = new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

});
layer.addTo(map); 
const marker = new Marker(latLng(0, 0));
marker.addTo(map);

function updateInfoDisplay (
  ip: string, 
  location: string, 
  timezone: string, 
  isp: string
) {
  ipText.innerText = ip;
  locationText.innerText = location;
  timezoneText.innerText = timezone;
  ispText.innerText = isp;
}

async function getDataFromIp(ip?: string) {
  try {
    document.body.appendChild(loader);
    
    const res = await fetch(`${BASE_URL}${API_KEY}${ip ? '&ipAddress=' + ip : ''}`);
    const data = (await res.json()) as ipAddressData;

    return data;
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    loader.remove();
  }
}

async function handleIpChange(e: Event) {
  try {
    let ipValue;

    if(e.type == 'submit') { 
      (e as SubmitEvent).preventDefault();
      const formData = new FormData(form as HTMLFormElement);
      ipValue = formData.get('ip-value') as string;
    } else {
      ipValue = '';
    }

    const {
      ip,
      isp,
      location: {
        city,
        country,
        lat,
        lng,
        postalCode,
        timezone
      }
    } = (await getDataFromIp(ipValue)) as ipAddressData;

    const coord = latLng(lat, lng);
    map.flyTo(coord, map.getZoom(), {
      duration: 0.3,
      noMoveStart: true
    });
    marker.setLatLng(coord);

    updateInfoDisplay(
      ip,
      `${city}, ${country} \n ${postalCode}`,
      `UTC ${timezone}`,
      isp
    );
  } catch (error) {
    console.error(error);
  }
}

form?.addEventListener('submit', handleIpChange);
window.addEventListener('DOMContentLoaded', handleIpChange);
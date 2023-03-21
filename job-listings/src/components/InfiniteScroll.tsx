import React, {useRef, useCallback, ReactNode, FC, useEffect} from 'react';

interface InfiniteScrollProps {
  loading: boolean;
  onBottomHit: (lastItem?: IntersectionObserverEntry) => void;
  children: ReactNode
}

const InfiniteScroll: FC<InfiniteScrollProps> = ({
  loading = false,
  onBottomHit = () => {},
  children
}) => {
  const observed = useRef(null);
  const intObserver = useRef<IntersectionObserver>();
  const intersectionCallBack = useCallback((entries:IntersectionObserverEntry[]) => {
    if(!loading && entries.length > 0 && entries[0].isIntersecting)
      onBottomHit(entries[0]);
  }, [loading, onBottomHit]);

  useEffect(() => {
    intObserver.current = new IntersectionObserver(intersectionCallBack);
  }, [intersectionCallBack]);

  useEffect(() => {
    intObserver.current?.disconnect();
    
    if(observed.current) intObserver.current?.observe(observed.current);

  }, [children]);
  
  return (
    <>
      {Array.isArray(children) ?
        children?.map((child, index) =>
          React.cloneElement(child, index === children.length - 1 ? {ref: observed, key: child.key} : { key: child.key})) : 
        children}
    </>
  );
};

InfiniteScroll.displayName = 'InfiniteScroll';

export default InfiniteScroll;
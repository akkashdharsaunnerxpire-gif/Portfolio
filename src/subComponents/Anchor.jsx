import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Anchor, Link } from "../components/AllSvgs";

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
  will-change: transform;

  .chain {
    transform: rotate(135deg);
  }
`;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

const AnchorComponent = (props) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const scrollPosition = window.scrollY;
      const windowSize = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      const total = bodyHeight - windowSize;
      const diff = Math.max(bodyHeight - (scrollPosition + windowSize), 0);
      const diffP = total > 0 ? (diff * 100) / total : 0;

      if (ref.current) ref.current.style.transform = `translateY(${-diffP}%)`;
      if (hiddenRef.current) {
        hiddenRef.current.style.display = scrollPosition > 5 ? "none" : "block";
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay>

      <Slider ref={ref}>
        {[...Array(props.number || 0)].map((_, id) => (
          <Link key={id} width={25} height={25} fill="currentColor" className="chain" />
        ))}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
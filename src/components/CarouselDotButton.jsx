import React, { useCallback, useEffect, useState } from "react";

export const useDotButton = (emblaApi) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    // WITHOUT STOP AUTOPLAY FUNCTION
    // const onDotButtonClick = useCallback(
    //     (index) => {
    //         if (!emblaApi) return;
    //         emblaApi.scrollTo(index);
    //     },
    //     [emblaApi],
    // );

    // ADD STOP AUTOPLAY TO DOT NAVIGATION INTERACTION
    const onDotButtonClick = useCallback(
        (index) => {
            if (!emblaApi) return;

            // Stop autoplay if plugin exists
            const autoplay = emblaApi.plugins()?.autoplay;
            autoplay?.stop();

            // Scroll to the selected index
            emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi
            .on("reInit", onInit)
            .on("reInit", onSelect)
            .on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
    };
};

export const DotButton = (props) => {
    const { children, ...restProps } = props;

    return (
        <button type="button" {...restProps}>
            {children}
        </button>
    );
};

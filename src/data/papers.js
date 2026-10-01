const papers = [
  {
    id: 1,

    title: "Light pollution indicators for all the major astronomical observatories",
    year: '2023',
    authors: "Fabio Falchi, Felipe Ramos, Salvador Bará, Pedro Sanhueza, Marcelo Jaque Arancibia, Guillermo Damke, Pierantonio Cinzano",
    abstract:
      "Light pollution at astronomical observatories is one of the main factors to be taken into account to preserve their scientific productivity and their useful lifetime. Using the Garstang–Cinzano model applied to the Visible Infrared Imaging Radiometer Suite (VIIRS) 2021 satellite radiance data, we have compared 28 sites, all hosting telescopes with apertures larger than 3 m, plus some additional selected sites. We computed and analysed five indicators of light pollution: radiance at zenith; averaged at 60◦ zenith distance; averaged over all the sky; averaged in the first 10◦ above the horizon; and horizontal irradiance. We found large variations of the values of the indicators, with a factor greater than 600 for the zenith artificial radiance between the least and most polluted major observatories. The results show that two-thirds of all large observatories have already surpassed the critical 10 per cent increase in radiance over the assumed natural levels. The results presented and the method described here can help to plan countermeasures in order to lower the impact of light pollution on observatories. These same methods can be also used to protect the night environment from the impact of artificial light (e.g. on biodiversity, on animal behaviour and physiology, on human health).",

    journal: "Royal Astronomical Society",
    doi: "https://doi.org/10.1093/mnras/stac2929",

    pdf: "/pdfs/Falchi-2023.pdf",

    firstPage: "/papers/example/first-page.jpg",

    figures: [
      "/images/falchi2023fig1.png",
      "/images/falchi2023fig2.png",
    ],

    figuresCaptions: [
      "Calculated Johnson V radiance at zenith for all major observatories, as a ratio over an assumed background of 22.0 mag arcsec⁻². Only six (note that two observatories are reproduced twice; see the main text for the explanation) out of 28 observatories are below the 1 per cent increase of radiance over the assumed natural one (solid black line)",

      "Calculated Johnson V average radiance at 30◦ above the horizon as a ratio over an assumed background of 21.8 mag arcsec⁻² . The first group represents the potential sites, the second a selection of amateur sites, the third all the major observatories, and the fourth a selection of historic observatories sites. The red line indicates the 10 per cent increase above the assumed natural level.",
    ]
  },

  {
    id: 2,

    title: "Assessing light pollution in vast areas: Zenith sky brightness maps of Catalonia",
    year: '2023',
    authors: "Hector Linares, Eduard Masana, Salvador J. Ribas, Manuel García-Gil, Martin Aubé, Alejandro Sánchez de Miguel, Alexandre Simoneau",
    abstract:
      "Zenith sky brightness maps in the V and B bands of the region of Catalonia are presented in this paper. For creating them we have used the light pollution numerical model Illumina v2. The maps have a sampling of 5 x 5 km for the whole region with an improved resolution of 1 × 1 km for one of the provinces within Catalonia, Tarragona. Before creating the ﬁnal maps, the methodology was tested successfully by comparing the computed values to measurements in nineteen different locations spread out throughoutthe territory. The resulting maps have been compared to the zenith sky brightness world atlas and alsoto Sky Quality Meter (SQM) dynamic measurements. When comparing to measurements we found smalldifferences mainly due to mismatching in the location of the points studied, and also due to differencesin the natural sky brightness and atmospheric content. In the comparison to the world atlas some differ-ences were expected as we are taking into account the blocking effect of topography and obstacles, andalso due to a more precise light sources characterization. The results of this work conﬁrm the conclusionfound in other studies that the minimum sampling for studying sky brightness ﬁne details is of 1 × 1 km.However, a sampling of 5 × 5 km is interesting when studying general trends, mainly for vast areas, dueto the reduction of the time required to create the maps",

    journal: "Elsevier",
    doi: "https://doi.org/10.1016/j.jqsrt.2023.108678",

    pdf: "/pdfs/Linares-2023.pdf",

    firstPage: "/papers/example/first-page.jpg",

    figures: [
      "/images/linares2023fig1.png",
      "/images/linares2023fig2.png",
      "/images/linares2023fig3.png",
      "/images/linares2023fig4.png",
      "/images/linares2023fig5.png",
      "/images/linares2023fig6.png",
      "/images/linares2023fig7.png",
      "/images/linares2023fig8.png",
      "/images/linares2023fig9.png",
      "/images/linares2023fig10.png",
      "/images/linares2023fig11.png",
      "/images/linares2023fig12.png",
      "/images/linares2023fig13.png",
      "/images/linares2023fig14.png",
      "/images/linares2023fig15.png",
      "/images/linares2023fig16.png",
      "/images/linares2023fig17.png",
    ],

    figuresCaptions: [
      "DSLR channel ratios of the most common light ﬁxtures technologies: Compact Fluorescent (CFL), Mercury Vapor (MV), Halogens (HAL), Ceramic Metal Halide (CMH), High Pressure Sodium (HPS), Low Pressure Sodium (LPS), Metal Halide (MH), Fluorescent (FL), Light Emitting Diode (LED), Incandescent (INC). From [13].",

      "Filter B (blue), ﬁlter V (orange), and the 12 spectral windows of 30 nm computed with Illumina. (For interpretation of the references to colour in this ﬁgure legend, the reader is referred to the web version of this article.)",

      "Picture taken from the ISS centered in Catalonia. NASA Photo ID: ISS052-E-31962. Source: Earth Science and Remote Sensing Unit, NASA Johnson Space Center.",

      "Test locations where the ZBM was estimated and compared against measurements.",

      "Sensitivity of the V and SQM ﬁlters alongside the three most used technology lamps used in Catalonia. Sensitivity curves are normalized to a maximum of 1, and emission functions to a maximum of 0.5. Blue: SQM. Orange: V Johnson. Purple: LED 40 0 0K. Red: LED 30 0 0K. Green: HPS.",
      
      "Zenith sky brightness values of the 19 test locations. Reference number according to Table 3.",

      "Zenith sky brightness map of Catalonia in the B band.",

      "Zenith sky brightness map of Catalonia in the V band.",

      "ZSB maps in B band of Tarragona.",
     
      "ZSB maps in V band of Tarragona.",

      "Comparison between V and B (B-V) bands sky brightening with respect the natural brightness. Top: Catalonia map. Bottom: histogram.",

      "ZSB maps in V band of Catalonia. Left: Illumina map. Right: [2].",

      "Sky brightness difference map between the ZSB map and the SQM map.",
      
      "Histogram of the difference between the ZSB map and the SQM map.",
      
      "HPS ﬁltered emission. In orange SQM ﬁlter and in blue V ﬁlter. (For interpretation of the references to colour in this ﬁgure legend, the reader is referred to the web version of this article.)",
      
      "LED 30 0 0K ﬁltered emission. In orange SQM ﬁlter and in blue V ﬁlter. (For interpretation of the references to colour in this ﬁgure legend, the reader is referred to the web version of this article.)",

      "LED 40 0 0k ﬁltered emission. In orange SQM ﬁlter and in blue V ﬁlter. (For interpretation of the references to colour in this ﬁgure legend, the reader is referred to the web version of this article.)"
    ]
  },
  {
    id: 3,
    title: "GeoColor: A Blending Technique for Satellite Imagery",
    year: '2020',

    //Turn this into a list
    authors: "STEVEN D. MILLER, DANIEL T. LINDSEY, CURTIS J. SEAMAN AND JEREMY E. SOLBRIG",
    abstract:
      "Value-added imagery is a useful means of communicating multispectral environmental satellite radiometer data to the human analyst. The most effective techniques strike a balance between science and art. The science side requires engineering physical algorithms capable of distilling the complex scene into a reduced set of key parameters. The artistic side involves design and construction of visually intuitive displays that maximize information content within the product image. The utility of such imagery to human analysts depends on the extent to which parameters or features of interest are conveyed unambiguously. Here, we detail and demonstrate a dynamic blended imagery technique, based on spatially variant transparency factors whose values are tied to algorithmically isolated parameters. The technique enables seamless display of multivariate information, and is applicable to any imaging system based on red–green–blue composites. We illustrate this technique in the context of GeoColor—an application of the Geostationary Operational Environmental Satellite R (GOES-R) series Advanced Baseline Imager (ABI) supporting operational forecasting and used widely in public communication of weather information",

    journal: "American Meteorological Society",
    doi: "https://doi.org/10.1175/JTECH-D-19-0134.s1",

    pdf: "/pdfs/geoColor2020.pdf",

    firstPage: "/papers/example/first-page.jpg",

    figures: [
      "/images/geoColorfig1.png",
      "/images/geoColorfig2.png",
      "/images/geoColorfig3.png",
      "/images/geoColorfig4.png",
      "/images/geoColorfig5.png",
      "/images/geoColorfig6.png",
      "/images/geoColorfig7.png",
      "/images/geoColorfig8.png",
      "/images/geoColorfig9.png",
    ],

    figuresCaptions: [
      "Example of dynamic imagery blending via the 'sandwich product' for a GOES-16 ABI image of thunderstorms at 2319 UTC 6 Apr 2018. (a) Color-enhanced infrared imagery are superimposed upon (b) visible reflectance imagery at a spatially uniform transparency factor of 70% to yield (c) the blended image.",

      "Example of the dynamic transparency factor for information displayed in Google Earth, following the technique of Turk et al. (2010). Radar-indicated precipitation (rainbow color) with zero transparency for valid data and a variable transparency infrared-based cloud field (white/gray) overlay a static true color surface background.",

      "Piecing together the components of GeoColor V1.0 imagery as a way of previewing GOES-R ABI capabilities. Dynamic transparency fields blend GOES-E and GOES-W (top left) visible imagery atop the MODIS Blue Marble on the dayside, and (top right) infrared imagery atop a nighttime lights mapped background on the nightside. The stacks are blended across the day/night terminator via (middle) cosine-weighted solar zenith angle data valid at the image collection time. (bottom) The final blended product.",

      "Components of GeoColor V2.0 as applied to GOES-16 ABI at 1217 UTC 1 Jul 2017. Nighttime components for (a) high cloud, (c) low cloud, and (e) surface/lights layers are vertically stacked, and then combined horizontally with (b) daytime SHAC true color using the (d) solar zenith angle as a blending factor to produce (f) the result.",
      
      "Example of GeoColor V2.0 for a terminator scene over the United States as observed by GOES-16 at 0002 UTC 14 Apr 2019.",

      "Example of multidimensional blending applied to Suomi NPP imagery of the eruption of Pavlof volcano at 1324 UTC 28 Mar 2016. (a) VIIRS band M15 (10.763 mm) brightness temperature with M12 (3.7 mm) overlay, showing a small hot spot at the location of the volcano caldera. (b) A blended composite of three layers, with components as discussed in the text, highlighting a volcanic ash plume in red.",

      "GeoColor V2.0 imagery of the 'Great American Eclipse' of 21 Aug 2017 as viewed by GOES-16 ABI, showing progression of the moon's shadow across the continental United States for selected times of (a) 1627, (b) 1727, (c) 1827, and (d) 1927 UTC. Near the time of greatest eclipse in (c), much of the southeast United States is under the moon's shadow.",

      "Example of spatial resolution sharpening of imagery via variance encoding. GOES-16 GeoColor V2.0 imagery of the San Joaquin Valley of central California (1805 UTC 13 Oct 2017), contrasting (a) standard 1 km resolution with (b) 0.5 km spatially sharpened.",

      "Example of feature imprinting upon GOES-16 ABI GeoColor V2.0 imagery from 2156 UTC 10 Apr 2019. A lofted dust signal, based on the spectral difference between the 10 and 12 mm, is normalized and used to modulate the RGB color components of the GeoColor image in a nonuniform way, imparting a yellow tonality to regions of high dust confidence (see text for details)."
    ]
  },

  

];

export default papers;
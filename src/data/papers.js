const papers = [
  {
    id: 1,
    section: "Light pollution",
    title: "Light pollution indicators for all the major astronomical observatories",
    year: '2023',
    authors: "Fabio Falchi, Felipe Ramos, Salvador Bará, Pedro Sanhueza, Marcelo Jaque Arancibia, Guillermo Damke, Pierantonio Cinzano",
    abstract:
      "Light pollution at astronomical observatories is one of the main factors to be taken into account to preserve their scientific productivity and their useful lifetime. Using the Garstang–Cinzano model applied to the Visible Infrared Imaging Radiometer Suite (VIIRS) 2021 satellite radiance data, we have compared 28 sites, all hosting telescopes with apertures larger than 3 m, plus some additional selected sites. We computed and analysed five indicators of light pollution: radiance at zenith; averaged at 60◦ zenith distance; averaged over all the sky; averaged in the first 10◦ above the horizon; and horizontal irradiance. We found large variations of the values of the indicators, with a factor greater than 600 for the zenith artificial radiance between the least and most polluted major observatories. The results show that two-thirds of all large observatories have already surpassed the critical 10 per cent increase in radiance over the assumed natural levels. The results presented and the method described here can help to plan countermeasures in order to lower the impact of light pollution on observatories. These same methods can be also used to protect the night environment from the impact of artificial light (e.g. on biodiversity, on animal behaviour and physiology, on human health).",

    journal: "Royal Astronomical Society",
    doi: "https://doi.org/10.1093/mnras/stac2929",

    pdf: "pdfs/Falchi-2023.pdf",

    firstPage: "papers/example/first-page.jpg",

    figures: [
      "images/falchi2023fig1.png",
      "images/falchi2023fig2.png",
    ],

    figuresCaptions: [
      "Calculated Johnson V radiance at zenith for all major observatories, as a ratio over an assumed background of 22.0 mag arcsec⁻². Only six (note that two observatories are reproduced twice; see the main text for the explanation) out of 28 observatories are below the 1 per cent increase of radiance over the assumed natural one (solid black line)",

      "Calculated Johnson V average radiance at 30◦ above the horizon as a ratio over an assumed background of 21.8 mag arcsec⁻² . The first group represents the potential sites, the second a selection of amateur sites, the third all the major observatories, and the fourth a selection of historic observatories sites. The red line indicates the 10 per cent increase above the assumed natural level.",
    ]
  },

  {
    id: 2,
    section: "Light pollution",
    title: "Assessing light pollution in vast areas: Zenith sky brightness maps of Catalonia",
    year: '2023',
    authors: "Hector Linares, Eduard Masana, Salvador J. Ribas, Manuel García-Gil, Martin Aubé, Alejandro Sánchez de Miguel, Alexandre Simoneau",
    abstract:
      "Zenith sky brightness maps in the V and B bands of the region of Catalonia are presented in this paper. For creating them we have used the light pollution numerical model Illumina v2. The maps have a sampling of 5 x 5 km for the whole region with an improved resolution of 1 × 1 km for one of the provinces within Catalonia, Tarragona. Before creating the ﬁnal maps, the methodology was tested successfully by comparing the computed values to measurements in nineteen different locations spread out throughoutthe territory. The resulting maps have been compared to the zenith sky brightness world atlas and alsoto Sky Quality Meter (SQM) dynamic measurements. When comparing to measurements we found smalldifferences mainly due to mismatching in the location of the points studied, and also due to differencesin the natural sky brightness and atmospheric content. In the comparison to the world atlas some differ-ences were expected as we are taking into account the blocking effect of topography and obstacles, andalso due to a more precise light sources characterization. The results of this work conﬁrm the conclusionfound in other studies that the minimum sampling for studying sky brightness ﬁne details is of 1 × 1 km.However, a sampling of 5 × 5 km is interesting when studying general trends, mainly for vast areas, dueto the reduction of the time required to create the maps",

    journal: "Elsevier",
    doi: "https://doi.org/10.1016/j.jqsrt.2023.108678",

    pdf: "pdfs/Linares-2023.pdf",

    firstPage: "papers/example/first-page.jpg",

    figures: [
      "images/linares2023fig1.png",
      "images/linares2023fig2.png",
      "images/linares2023fig3.png",
      "images/linares2023fig4.png",
      "images/linares2023fig5.png",
      "images/linares2023fig6.png",
      "images/linares2023fig7.png",
      "images/linares2023fig8.png",
      "images/linares2023fig9.png",
      "images/linares2023fig10.png",
      "images/linares2023fig11.png",
      "images/linares2023fig12.png",
      "images/linares2023fig13.png",
      "images/linares2023fig14.png",
      "images/linares2023fig15.png",
      "images/linares2023fig16.png",
      "images/linares2023fig17.png",
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
    section: "Imagery",
    title: "GeoColor: A Blending Technique for Satellite Imagery",
    year: '2020',

    //Turn this into a list
    authors: "STEVEN D. MILLER, DANIEL T. LINDSEY, CURTIS J. SEAMAN AND JEREMY E. SOLBRIG",
    abstract:
      "Value-added imagery is a useful means of communicating multispectral environmental satellite radiometer data to the human analyst. The most effective techniques strike a balance between science and art. The science side requires engineering physical algorithms capable of distilling the complex scene into a reduced set of key parameters. The artistic side involves design and construction of visually intuitive displays that maximize information content within the product image. The utility of such imagery to human analysts depends on the extent to which parameters or features of interest are conveyed unambiguously. Here, we detail and demonstrate a dynamic blended imagery technique, based on spatially variant transparency factors whose values are tied to algorithmically isolated parameters. The technique enables seamless display of multivariate information, and is applicable to any imaging system based on red–green–blue composites. We illustrate this technique in the context of GeoColor—an application of the Geostationary Operational Environmental Satellite R (GOES-R) series Advanced Baseline Imager (ABI) supporting operational forecasting and used widely in public communication of weather information",

    journal: "American Meteorological Society",
    doi: "https://doi.org/10.1175/JTECH-D-19-0134.s1",

    pdf: "pdfs/geoColor2020.pdf",

    firstPage: "papers/example/first-page.jpg",

    figures: [
      "images/geoColorfig1.png",
      "images/geoColorfig2.png",
      "images/geoColorfig3.png",
      "images/geoColorfig4.png",
      "images/geoColorfig5.png",
      "images/geoColorfig6.png",
      "images/geoColorfig7.png",
      "images/geoColorfig8.png",
      "images/geoColorfig9.png",
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
  {
    id: 4,
    section: "Wildfires",
    title: "Estimation of Forest Fire Danger by Using Fire Weather Index in the CORDEX MENA Region",
    year: "2026",
    authors: "Burcu CALDA, Kamil Collu, Nazan An, Mustafa Tufan Turp, Mehmet Levent Kurnaz",
    abstract: "Forest fires constitute a natural element of Mediterranean ecosystems. Nevertheless, over the past decade, rising temperatures and aridification associated with climate change in the Mediterranean Basin are anticipated to intensify meteorological conditions that promote wildfires. Consequently, forecasting fire danger in this region using fire indices is essential for implementing appropriate precautions. This study used projected changes for 2070-2099, relative to the 1981-2000 reference period, to evaluate forest fire danger using the Canadian Fire Weather Index (FWI) in the Mediterranean region and Turkey, a subset of the MENA domain. The analysis incorporated RCP4.5 and RCP8.5 (IPCC) output scenarios from the MPI-ESM-MR and HadGEM2-ES global models, which were dynamically downscaled to 50 km resolution for the CORDEX-MENA domain using RegCM4. Observational data from ERA-Interim, provided by ECMWF and covering the period 1981-2000, were also utilized to evaluate model performance. The MPI-ESM-MR model outputs showed fire-danger predictions that more closely aligned with the reforecast of observational data (ERA-Interim). Therefore, the MPI-ESM-MR model may be more appropriate for estimating fire danger levels utilizing the FWI. The most significant projected increases in future fire danger are anticipated over the Iberian Peninsula, Southern Europe, and parts of Turkey, particularly under the high-emission RCP8.5 scenario. These findings underscore the growing vulnerability of Mediterranean ecosystems to future climate change and accentuate the importance of regional wildfire adaptation and mitigation strategies. Based on future projections, forest fire danger intensity is expected to rise considerably across the region during the last three decades of this century.",
    journal: "Research Square",
    doi: "https://doi.org/10.21203/rs.3.rs-10754082/v1",
    pdf: "pdfs/Calda-2026.pdf",
    firstPage: "images/Calda-2026-first-page.jpg",
    figures: [
      "images/Calda-2026-fig1.png",
      "images/Calda-2026-fig2.png",
      "images/Calda-2026-fig3.png",
      "images/Calda-2026-fig4.png"
    ],
    figuresCaptions: [
      "Subdomains used in the study. Forest areas are shown in green.",
      "(a) The mean fire season (MJJASO) FWI using the ERA-Interim observational dataset for the period 1981-2000. (b) The mean fire season FWI using hindcast regional downscaling of the MPI-ESM-MR global model for the period 1981-2000. (c) The mean fire season FWI using hindcast regional downscaling of the HadGEM2-ES global model for the period 1981-2000.",
      "The mean fire season future FWI forecast (MJJASO, 2070-2099) using MPI-ESM-MR model with RCP4.5 (a) and RCP8.5 (b) emission scenarios. The mean fire season future FWI forecast (MJJASO, 2070-2099) using HadGEM2-ES model with RCP4.5 (c) and RCP8.5(d) emission scenarios.",
      "The difference of the output of the mean fire season FWI by MPI-ESM-MR model (2070-2099) with RCP4.5 (a) and RCP 8.5 (b) emission scenarios from the mean past fire season FWI output using MPI-ESM-MR model (1981-2000). The difference of the output of the mean fire season FWI by HadGEM2-ES model (2070-2099) with RCP4.5 (c) and RCP 8.5 (d) emission scenarios from the mean past fire season FWI output using HadGEM2-ES model (1981-2000)."
    ]
  },
  {
    id: 5,
    section: "Wildfires",
    title: "Calibration of the Fire Weather Index over Mediterranean Europe based on fire activity retrieved from MSG satellite imagery",
    year: "2014",
    authors: "Carlos C. DaCamara, Teresa J. Calado, Sofia L. Ermida, Isabel F. Trigo, Malik Amraoui, Kamil F. Turkman",
    abstract: "Here we present a procedure that allows the operational generation of daily maps of fire danger over Mediterranean Europe. These are based on integrated use of vegetation cover maps, weather data and fire activity as detected by remote sensing from space. The study covers the period of July–August 2007 to 2009. It is demonstrated that statistical models based on two-parameter generalised Pareto (GP) distributions adequately fit the observed samples of fire duration and that these models are significantly improved when the Fire Weather Index (FWI), which rates fire danger, is integrated as a covariate of scale parameters of GP distributions. Probabilities of fire duration exceeding specified thresholds are then used to calibrate FWI leading to the definition of five classes of fire danger. Fire duration is estimated on the basis of 15-min data provided by Meteosat Second Generation (MSG) satellites and corresponds to the total number of hours in which fire activity is detected in a single MSG pixel during one day. Considering all observed fire events with duration above 1 h, the relative number of events steeply increases with classes of increasing fire danger and no fire activity was recorded in the class of low danger. Defined classes of fire danger provide useful information for wildfire management and are based on the Fire Risk Mapping product that is being disseminated on a daily basis by the EUMETSAT Satellite Application Facility on Land Surface Analysis.",
    journal: "International Journal of Wildland Fire",
    doi: "http://dx.doi.org/10.1071/WF13157",
    pdf: "pdfs/DaCamara-2014.pdf",
    firstPage: "images/DaCamara-2014-first-page.jpg",
    figures: [
      "images/DaCamara-2014-fig1.png",
      "images/DaCamara-2014-fig2.png",
      "images/DaCamara-2014-fig3.png"
    ],
    figuresCaptions: [
      "Geographical distribution of the three main vegetation types as derived from GLC2000.",
      "Geographical distribution of events with fire duration ≥ 3 h recorded during July-August 2007 to 2009. Each panel is restricted to events in one main vegetation type, namely forests (upper panel), shrublands (middle panel) and cultivated areas (bottom panel). The spatial distribution of each vegetation type is shown in dark grey and the year of occurrence of each event is identified by the colour of the dots.",
      "Probability plots for fitted generalised Pareto models for forest (left panel), shrubland (middle panel) and cultivated area models (right panel). Each plot represents fitted model quantiles (x-axis) v. sample data quantiles (y-axis)."
    ]
  },
  {
    id: 6,
    section: "Wildfires",
    title: "Wildfire risk in a changing climate: Evaluating fire weather indices and their global patterns with CMIP6 multi-model projections",
    year: "2025",
    authors: "Yan He, Zixuan Zhou, Eun-Soon Im, Hyun-Han Kwon",
    abstract: "This study investigates potential wildfire risks across different global warming scenarios through a comparative analysis of two prominent fire weather indices: the McArthur Forest Fire Danger Index (FFDI) and the Canadian Forest Fire Danger Index (FWI), leveraging the latest multi-model projections from the 6th phase of the Coupled Model Intercomparison Project (CMIP6). Utilizing the Extreme Gradient Boosting (XGBoost) algorithm and the Shapley value, we identify the impacts of meteorological variables on fire weather danger as represented by FFDI and FWI. Our findings reveal that under the Shared Socioeconomic Pathways (SSP) 5-8.5 high-emission scenario, both FFDI and FWI project significant intensification of fire weather, particularly in historically recognized high-risk hotspots, demonstrating robust inter-model consistency. Notably, the future projections of FFDI indicate the likely occurrence of wildfires with unprecedented severity. The comparative analysis using Shapley values highlights substantial regional and index-specific variations in the contribution of meteorological input variables to fire weather simulations. While these global patterns are generally retained as global warming leads to a systematic reinforcement of all variables, in-depth regional scale analyses further uncover a stark contrast of dominant factors controlling FFDI and FWI. These findings stimulate discussion on the potential adaptability and discrepancies of empirically derived fire models, highlighting the need for future research to advance fire weather modeling with enhanced flexibility and multi-factor consideration.",
    journal: "Weather and Climate Extremes",
    doi: "https://doi.org/10.1016/j.wace.2025.100751",
    pdf: "pdfs/He-2025.pdf",
    firstPage: "images/He-2025-first-page.jpg",
    figures: [
      "images/He-2025-fig1.png",
      "images/He-2025-fig2.png",
      "images/He-2025-fig3.png"
    ],
    figuresCaptions: [
      "Global distributions of FFDI and FWI above their 95th percentiles during the historical period (1976-2005) based on the EFFIS reanalysis data (a, d), the CMIP6 ensemble simulations (b, e), and the absolute differences between the two (c, f).",
      "Taylor diagrams of FFDI (a) and FWI (b) above their 95th percentiles during the historical period (1976-2005) based on selected CMIP6 models and their ensemble mean.",
      "Projected changes in ensemble mean of FFDI (a, b) and FWI (c, d) under the SSP126 and SSP585 scenarios (2070-2099) with respect to the historical baseline (1976-2005). Areas where at least 10 out of 12 models agree on the direction of change (positive or negative) and the variations have passed the Student's t-test for statistical significance are highlighted with stippling."
    ]
  },
  {
    id: 7,
    section: "Wildfires",
    title: "Assessing the performance of fire danger indexes in a Mediterranean area",
    year: "2018",
    authors: "Costantino Sirca, Michele Salis, Bachisio Arca, Pierpaolo Duce, Donatella Spano",
    abstract: "The fire danger (FD) defines the conditions less or more favourable for a fire ignition success and its propagation. FD indexes, that integrates environmental variables related to FD in more or less complex equations and systems, are widely used in wildfire prone countries for both scientific and operational purposes. Assessing the performance of FD indexes is challenging and this issue is quite debated within the fire community, which has been trying to apply several methodologies to evaluate FD indexes. The main aim of this work is to give a contribution to this effort. The analysis was conducted using data from a fire-prone Mediterranean area (Sardinia island, Italy), where 8 FD indexes were evaluated and compared using different statistical approaches. We calculated the daily FD values for the period 2000-2007 over the study area. A set of statistical tools (namely Spearman rank correlation, Index Value Distribution and Percentile Analysis, and Logistic Regression) were applied to evaluate the performance of each FD index by comparing FD values with fire occurrence indicators. The statistical tests revealed a large variability in FD indexes performance, depending also on fire activity conditions. Our results showed that two of the tested FD indexes reached a good overall performance. Findings from this study can help both the scientific community and local fire managers, supporting the evaluation of early warning systems and fire prevention strategies in the Mediterranean Basin.",
    journal: "iForest - Biogeosciences and Forestry",
    doi: "https://doi.org/10.3832/ifor2679-011",
    pdf: "pdfs/Sirca-2018.pdf",
    firstPage: "images/Sirca-2018-first-page.jpg",
    figures: [
      "images/Sirca-2018-fig1.png",
      "images/Sirca-2018-fig2.png",
      "images/Sirca-2018-fig3.png"
    ],
    figuresCaptions: [
      "Location of the study area (Sardinia, Italy) in the Mediterranean Basin. The fire ignition points of the period 2000-2007 are reported in the figure on the right.",
      "Climatic areas of Sardinia (here numbered from 1 to 7). Triangles indicate the location of the 48 weather stations used in this study.",
      "Mean daily values of the fire danger indexes within the climatic area n. 3, along with observed fire number and burned area (BA) for the study period 2000-2007."
    ]
  },
  {
    id: 8,
    section: "Wildfires",
    title: "Assessing wildfire risk to critical infrastructure in central Chile: application to an electrical substation",
    year: "2024",
    authors: "Gonzalo Severino, Andrés Fuentes, Alejandro Valdivia, Fernando Auat-Cheein, Pedro Reszka",
    abstract: "Background. Wildfires have caused significant damage in Chile, with critical infrastructure being vulnerable to extreme wildfires. Aim. This work describes a methodology for estimating wildfire risk that was applied to an electrical substation in the wildland-urban interface (WUI) of Valparaíso, Chile. Methods. Wildfire risk is defined as the product between the probability of a wildfire reaching infrastructure at the WUI and its consequences or impacts. The former is determined with event trees combined with modelled burn probability. Wildfire consequence is considered as the ignition probability of a proxy fuel within the substation, as a function of the incident heat flux using a probit expression derived from experimental data. The heat flux is estimated using modelled fire intensity and geometry and a corresponding view factor from an assumed solid flame. Key results. The probability of normal and extreme fires reaching the WUI is of the order of 10^-4 and 10^-6 events/year, respectively. Total wildfire risk is of the order of 10^-5 to 10^-4 events/year. Conclusions. This methodology offers a comprehensive interpretation of wildfire risk that considers both wildfire likelihood and consequences. Implications. The methodology is an interesting tool for quantitatively assessing wildfire risk of critical infrastructure and risk mitigation measures.",
    journal: "International Journal of Wildland Fire",
    doi: "https://doi.org/10.1071/WF22113",
    pdf: "pdfs/Severino-2024.pdf",
    firstPage: "images/Severino-2024-first-page.jpg",
    figures: [
      "images/Severino-2024-fig1.png",
      "images/Severino-2024-fig2.png",
      "images/Severino-2024-fig3.png"
    ],
    figuresCaptions: [
      "Flowchart illustrating the methodology implemented in this work to analyse the risk posed by wildfires to critical infrastructure.",
      "Flaming front modelled as four rectangular emitting surfaces (numbered 1 to 4 in the figure) to determine its view factor with respect to a target of small size within the infrastructure analysed.",
      "Satellite image of the study area, showing the location of the electrical substation (ES) analysed (a), along with a Digital Elevation Model (DEM) acquired by the ALOS satellite with a resolution of 12.5 m per pixel (b). Slope (c) and aspect (d) maps were produced with this DEM."
    ]
  }
]

export default papers;

const papers = [
  {
    id: 9,
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
    id: 10,
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
      "images/caldaTab1.png",
      "images/caldaTab2.png",
      "images/caldaTab3.png",
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
      "images/severinoFig1.png",
      "images/severinoFig2.png",
      "images/severinoFig3.png",
      "images/severinoFig4.png",
      "images/severinoFig5.png",
      "images/severinoFig6.png",
      "images/severinoFig7.png",
      "images/severinoTab1.png",
      "images/severinoFig8.png",
      "images/severinoFig9.png",
      "images/severinoFig10.png",
      "images/severinoFig11.png",
      "images/severinoTab2.png",
    ],
    figuresCaptions: [
      "Flowchart illustrating the methodology implemented in this work to analyse the risk posed by wildfires to critical infrastructure. The first step is system definition and hazard identification. The inputs are represented by white blocks. The main components of the methodology and the intermediate calculations are represented by violet and grey blocks, respectively. The risk components are the likelihood of a fire reaching the infrastructure and the consequences of a fire that has already reached it. The output is wildfire risk.",
      
      "Flaming front modelled as four rectangular emitting surfaces (numbered 1 to 4 in the figure) to determine its view factor with respect to a target of small size within the infrastructure analysed. The target unit normal vector points perpendicularly to the common vertex of the rectangles. The parameters required are flame length (H), flame width (b), the horizontal distance where the target is located with respect to the emitting surface (y = b/2) and the distance between the target and the surface (x).",
      
      "Satellite image of the study area, showing the location of the electrical substation (ES) analysed (a), along with a Digital Elevation Model (DEM) acquired by the ALOS satellite with a resolution of 12.5 m per pixel (b). Slope (c) and aspect (d) maps were produced with this DEM. The orientation and scale shown in Fig. 3a are the same as for all the images showing the study area in this document.",
      
      "Histograms of temperature (a) and wind velocity (Ws) (b), along with a wind rose (c), produced from hourly data recorded by a weather station (WMO code: 85560) located near the study area for the entire year 2020.",
      
      "Spatial fuel distribution in the study area. Two distributions are considered: a simplified one consisting only of an urban area and wildland (a), and a more detailed distribution determined from a subdivision made by the Chilean Forest Service, CONAF (b). Colours represent the fuel models assigned: urban/developed (light grey), agricultural (dark grey), water (blue), moderate load, dry climate grass–shrub (brown), very high load, humid climate shrub (dark red), and moderate load, humid climate timber–grass–shrub (green) ( Scott and Burgan 2005). The electrical substation (ES) is in the urban area in both figures.",
      
      "Burn probability (BP) estimated with FlamMap for the study area, considering uniform wind velocities of 5 m/s (a–d), and 25 m/s (e–h). Results with a simplified fuel distribution (a, b, e, f), and a more detailed distribution (c, d, g, h) are shown. Representative BPs in the electrical substation vicinity are calculated by taking the average of the BP curves (b, d, f, h) corresponding to the substation perimeter, giving 0.102 (b), 0.031 (d), 0.047 (f) and 0.028 (h).",
     
      "Fireline intensity estimated with FlamMap for the study area, considering uniform wind velocities of 5 m/s (a–d), and 25 m/s (e–h). Results with a simplified fuel distribution (a, b, e, f), and a more detailed distribution (c, d, g, h) are shown. Representative fireline intensities in the electrical substation vicinity are calculated by taking the average of the fireline intensity curves (b, d, f, h) corresponding to the substation perimeter, giving 1832 kW/m (b), 1870 kW/m (d), 65 747 kW/m (f) and 65 558 kW/m (h).",
     
      "Incident heat flux on a target within the electrical substation analysed, for the two fuel distributions and the two flaming fronts considered to assess exposure.",
     
      "Event trees developed to estimate the likelihood of a wildfire reaching the infrastructure of interest, for the simplified (a) and the detailed (b) simulated landscapes. In both cases, the initiating event is the ignition of a wildland fuel, and the first four intermediate events are having burned area, temperature and wind above historic thresholds. The fifth intermediate event is BP. Finally, the probabilities of the outcomes of interest (propagation of a normal or extreme fire to the WUI) result from multiplying the ignition frequency and the five intermediate probabilities. In these event trees, BPs are the averages in the substation perimeter, estimated in the simplified (a) and the detailed (b) simulated landscapes for the two wind conditions (average and extreme wind).",
     
      "Fire records analysed in this work to estimate ignition frequency and the subsequent conditionalprobability of a fire reaching the point of interest. These records correspond to fires in the Valparaíso and Viña del Mar municipalities in the 2002–2019 period: number of ignitions per year (a), histogram of burned area that resulted from these fires (b), and histograms of ambient temperature (c), and wind velocity (d) when ignitions leading to burned areas larger than 1 ha occurred.",
     
      "Scenarios for estimating the heat flux on a target within the electrical substation analysed. Orange indicates a wildfire engulfing the substation from all sides, whereas yellow rectangles represent two flaming fronts coming from the sides of the substation. The scale of the image is larger than that in Fig. 3.",
     
      "Flammability data for PMMA, compiled by Bal and Rein (2011) from several sources and analysed here for developing a vulnerability model, presented as time to ignition (in seconds) as a function of heat flux (in kW/m2) in linear (a), and log–log scales (b). From these data, a probit function is proposed (c), which serves to estimate an ignition probability curve in the critical heat flux region (d).",
     
      "Wildfire risk estimated for the two fuel distributions and two scenarios considered in the case study"
    ]
  },
  {
    id: 1,
    section: "Wildfires",
    title: "The key role of extreme weather and climate change in the occurrence of exceptional fire seasons in south-central Chile",
    year: "2024",
    authors: "Tomás Carrasco-Escaff, René Garreaud, Deniz Bozkurt, Martín Jacques-Coper, Aníbal Pauchard",
    abstract: "Unprecedentedly large areas were burned during the 2016/17 and 2022/23 fire seasons in south-central Chile (34-39°S). These seasonal-aggregated values were mostly accounted for human-caused wildfires within a limited period in late January 2017 and early February 2023. In this paper, we provide a comprehensive analysis of the meteorological conditions during these events, from local to hemispheric scales, and formally assess the contribution of climate change to their occurrence. To achieve this, we gathered monthly fire data from the Chilean Forestry Corporation and daily burned area estimates from satellite sources. In-situ and gridded data provided near-surface atmospheric insights, ERA5 reanalysis helped analyze broader wildfire features, high-resolution simulations were used to obtain details of the wind field, and large-ensemble simulations allowed the assessment of climate change's impact on extreme temperatures during the fires. This study found extraordinary daily burned area values (>65,000 ha) occurring under extreme surface weather conditions (temperature, humidity, and winds), fostered by strong mid-level subsidence ahead of a ridge and downslope winds converging towards a coastal low. Daytime temperatures and the water vapor deficit reached the maximum values observed across the region, well above the previous historical records. We hypothesize that these conditions were crucial in exacerbating the spread of fire, along with longer-term atmospheric processes and other non-climatic factors such as fuel availability and increasing human-driven ignitions. Our findings further reveal that climate change has increased the probability and intensity of extremely warm temperatures in south-central Chile, underscoring anthropogenic forcing as a significant driver of the extreme fire activity in the region.",
    journal: "Weather and Climate Extremes",
    doi: "https://doi.org/10.1016/j.wace.2024.100716",
    pdf: "pdfs/Carrasco-2024.pdf",
    firstPage: "images/Carrasco-2024-first-page.jpg",
    figures: [
      "images/carrascoFig1.png",
      "images/carrascoFig2.png",
      "images/carrascoFig3.png",
      "images/carrascoFig4.png",
      "images/carrascoFig5.png",
      "images/carrascoFig6.png",
      "images/carrascoFig7.png",
      "images/carrascoFig8.png",
      "images/carrascoFig9.png",
      "images/carrascoFig10.png",
      "images/carrascoFig11.png",
      "images/carrascoFig12.png",
      "images/carrascoFig13.png",
      "images/carrascoFig14.png",
      "images/carrascoFig15.png",
    ],
    figuresCaptions: [
      "(a) MODIS Aqua satellite image (corrected reflectance, bands 7-2-1) of south-central Chile on Jan 26, 2017. The polygons in violet show the area burned for three days around Jan 26, 2017. (b) The same as (a) but for Feb 03, 2023. (c) Location of the main sectors, boxes, administrative regions, and weather stations referenced in this work, including Sector Las Máquinas (SLM, upper red polygon), Sector Florida (SF, lower red polygon), Sector Tomé (ST, upper blue polygon), Sector Santa Ana (SSA, lower blue polygon), Box 1 (B1, box in fuchsia), Box 2 (B2, box in green), weather station General Freire (GF, upper black dot), General Bernardo O’Higgins (GBO, middle black dot), and María Dolores (MD, lower black dot). (d) Topography from the GTOPO30 Digital Elevation Model (~1 km spatial resolution) along with WRF inner domains defined for studying the atmospheric conditions during a week around Jan 26, 2017 (domain A), and Feb 03, 2023 (domain B).",

      "(a) Time series of burned area per fire season (July–June) in south-central Chile (administrative regions from O’Higgins to La Araucanía) accord­ing to CONAF. Colors indicate the burned area in January (blue), February (red), and other months (gray). Insets indicate the percentages of total area burned in January, February, and other months during the 2016/17 and 2022/23 seasons (middle and right chart pies) and other seasons (left chart pie). (b) Time series of number of fires during January (blue) and February (red). Dashed lines indicate mean values. Fire seasons are denoted by their end year.",

      "(a) Daily values of area burned in south-central Chile according to the MODIS MCD64A1 product during January–February 2017. The area burned in sector Las Máquinas, sector Florida, and the rest of the domain are shown in blue, red and gray, respectively. (b) Time series of highest daily maximum temperature in south-central Chile according to CR2Met (CR2Met Tx, red), and daily maximum temperature at weather stations General Bernardo O’Higgins (GBO Tx, blue) and General Freire (GF Tx, gray). The red square with error bars indicates the CR2Met Tx mean for January–February during 1970–2023 plus/ minus one standard deviation. (c) The same as (a) but for January–February 2023 and sectors Santa Ana and Tomé. (d) The same as (b) but for Januar­y–February 2023 and weather station María Dolores (MD) instead of GF. The locations of weather stations are indicated in Fig. 1.",

      "(a) Spatial distribution of the 3-day maximum temperature around Jan 26, 2017, according to available weather stations (circles) and the CR2Met (gridded data). The polygons in black show the area burned during the three-day period. (b) The same as (a) but for a three-day period around Feb 03, 2023.",

      "(a) Mean (yellow line), 95th percentile (dark red line), and maximum (dark red circles) of daily maximum temperature (Tx) during summer (Dec–Feb) at weather station General Bernardo O’Higgins (GBO; see Fig. 1) from 1970 to 2023. Green circles indicate the highest summer temperature in south-central Chile (xTx) according to the CR2Met. (b) Empirical frequency distribution of daily maximum temperature at GBO for summer days from 1970 to 2023. Summer seasons are denoted by their end year.",
      
      "Near-surface air temperature and horizontal winds from WRF simulations for (a) Jan 26, 2017, at 10 UTC, (b) Jan 26, 2017, at 20 UTC, (c) Feb 3, 2023, at 10 UTC, and (d) Feb 3, 2023, at 20 UTC. Black dashed circles in panels (a) and (c) show the location of the main fire sectors. Black crosses indicate the sites used for the time series in Fig. 7.",
      
      "Time series of main near-surface meteorological variables obtained from WRF simulations near the large fire sectors (black crosses in Fig. 6) during seven days around FO17 and FO23. Panels (a) and (b) include observed surface air temperature time series (dotted lines) from nearby weather stations.",

      "(a) Scatter plot between daily maximum values of near-surface temperature (Tx) and wind speed obtained from 6-hourly ERA5 summer data (period 1979–2023). Tx values were obtained using the nearest grid point to General Bernardo O’Higgins (GBO) station, while wind speed values were calculated as the spatial average value over an area near the main fire sectors (Box 2 in Fig. 1). (b) The same as in (a) but for daily maximum vapor-pressure deficit (VPD) obtained from 1-hourly ERA5 summer data (period 1979–2023) at the nearest grid point to GBO. Fuchsia lines indicate curves of constant water vapor pressure.",

      "Forecast of near-surface variables at 18 UTC for a grid point close to GBO station (36.5◦ S, 72◦ W) from the Global Forecast System (GFS). (a) 2-m air temperature (◦ C) for late January 2017. (b) The same as (a) but for early February 2023. (c) 10-m wind speed (m/s) for late January 2017. (d) The same as in (c) but for early February 2023. Each row corresponds to the forecast temperature for the next 15 days (one value per day, color-coded according to the scale in panels (a) and (c)) initialized at either 06Z or 18Z. The upper row shows the observed daily maximum values obtained from hourly data at GBO station.",

      "Sea level pressure (colors in hPa) and geopotential height at 500 hPa (Z500, contours in geopotential meters (gpm)) during a three-day period around January 26, 2017 (panels a–c) and February 3, 2023 (panels d–f). All fields are at 12 UTC.",

      "(a) Longitude-height profile of the potential temperature difference between Jan 26, 2017 at 20 UTC and Jan 25, 2017 at 20 UTC (24-hr difference), based on WRF simulations. (b) The same as (a) but for a 24-hr difference ending on Feb 3, 2023 at 20 UTC. (c), (d), (e) and (f): Longitude-height profiles of potential temperature and vertical-zonal velocities based on WRF simulations. The nearest grid points to the specified latitudes were used, and the data were averaged over a 3-h period centered around the specified dates. Vertical velocity was scaled by a factor 50 and a gaussian filter was applied to zonal and vertical velocities before drawing the profiles. The topography is shown in brown filled contours.",

      "(a) Empirical frequency distribution of 6-hourly mid-level vertical velocity (Pa/s) at 36◦ S, 72◦ W during summer according to ERA5 data from 1979 to 2023. Vertical lines in red, green and blue indicate the maximum value in a three-day period around Jan 26, 2017, Feb 2, 2019 and Feb 3, 2023, respectively. Dotted and dashed black lines correspond to the 95th and 99th percentile, respectively. (b) Histogram as in (a) but for minimum zonal wind averaged over Box 1 (38-36.5◦ S, 71.7–71.5◦ W; B1 in Fig. 1c). Vertical lines in red, green and blue indicate the minimum value in a three-day period around Jan 26, 2017, Feb 3, 2019 and Feb 3, 2023, respectively. Dotted and dashed black lines correspond to the 5th and 1st percentile, respectively. Bins containing data are displayed with a gray background for better visibility.",
      
      "(a) Hovmöller diagrams of potential temperature and horizontal wind near Sector Las Máquinas (black cross in Fig. 6a) during a 7-day period around FO17. (b) The same as (a) but for a point near Sector Santa Ana (black cross in Fig. 6c) during a 7-day period around FO23. The thick black lines indicate the time period spanning from the night before the fire outbreaks until the afternoon during the events.",

      "Hemispheric-scale precursors of FO17 and FO23. (a) Composites of geopotential height at 500 hPa (Z500, colors in hPa) and 0.2101 sigma streamfunction (PSI200, contours every 1e7 m2/s) anomalies (with respect to 1991–2020 climatology) computed from the NCEP-NCAR Reanalysis 1 for a 7-day period including FO17. (c) and (e) The same as (a) but for one and two weeks before the 7-day period including FO17, respectively. (b), (d) and (f) The same as (a), (c) and (e) but for FO23.",

      "Changes in extreme temperature behavior due to climate change in south-central Chile. (a) Scatter plot between highest summer temperature in south-central Chile (xTx) and the smoothed GMST anomaly (with respect to 2011–2020). The gray circles represent xTx values from the CESM-LE simulation, and red circles indicate the values obtained from the CR2Met dataset. The solid blue line corresponds to the location parameter of a GMST-dependent normal distribution fitted to the CESM-LE xTx values. Dashed blue lines represent lines of constant exceedance probability according to the CESM-LE, showing that a 42 ◦ C event would be 20 times less probable in the preindustrial (PI) climate (GMST anomaly of − 1.1 ◦ C) and 7 times more probable in a future climate 2 ◦ C warmer than PI levels (PI+2 ◦ C; GMST anomaly of 0.9 ◦ C). (b) Present-day and PI distributions of xTx according to CESM-LE. Extreme warm events of return period similar to FO17 and FO23 have increased their intensity by 1.3 ◦ C due to climate change in comparison to PI intensity. (c) The same as in (b) but for future (PI+2 ◦ C) and present-day climates, showing a 1.0 ◦ C intensity increase of events of return period similar to FO17 and FO23 due to climate change.",
    ]
  },
  {
    id: 2,
    section: "Wildfires",
    title: "The 2010-2015 Megadrought and its influence on the fire regime in central and south-central Chile",
    year: "2018",
    authors: "Mauro E. González, Susana Gómez-González, Antonio Lara, René Garreaud, Ignacio Díaz-Hormazábal",
    abstract: "Forest fire activity has increased in recent years in central and south-central Chile. Drought conditions have been associated with the increase of large wildfires, area burned and longer fire seasons. This study examines the influence of drought on fire regimes and discusses landscape management opportunities to decrease fire hazard. Specifically, we investigate the effect of the 2010-2015 Megadrought (MD) compared to 1990-2009 period on fire activity (fire-season length, number of fires and burned area across months, fire sizes, regions and vegetation cover types, simultaneity, and duration of fires) in central and south-central Chile (32°-39°S), using contemporary fire statistics derived from the Chilean Forest Service. For large fire events (>200 ha) the average season length increased by 67 d (44%), comparing 2010-2015 to 1990-2009. Earlier and later ignition dates resulted in extended fire seasons in MD years. During the MD, the number, area burned, simultaneity, and duration of large fires increased significantly compared to the control period, including the unprecedented occurrence of large fires during winter. The burned area in large fires increased in all vegetation types, during the MD compared to the control period, especially in the exotic plantation cover type. The regions that were most affected by fire (i.e., total area burned) during the MD were Maule, Bío-Bío, and Araucanía (35-39°S) that concentrate >75% of forest plantations in Chile. Although both maximum temperatures and precipitation are drivers of fire activity, a simple attribution analysis indicates that the sustained rainfall deficit during 2010-2015 was the most critical factor in the enhanced fire activity. Future climate change predictions indicate more recurrent, intense, and temporally extended droughts for central and south-central Chile. Under this scenario, land-use planning and fire and forest management strategies must promote a more diverse and less flammable landscape mosaic limiting high load, homogenous, and continuous exotic plantations.",
    journal: "Ecosphere",
    doi: "https://doi.org/10.1002/ecs2.2300",
    pdf: "pdfs/Gonzalez-2018.pdf",
    firstPage: "images/Gonzalez-2018-first-page.jpg",
    figures: [
      "images/gonzalezFig1.1.png",
      "images/gonzalezFig1.2.png",
      "images/gonzalezFig2.png",
      "images/gonzalezFig3.png",
      "images/gonzalezFig4.png",
      "images/gonzalezFig5.png",
      "images/gonzalezFig6.png",
      "images/gonzalezFig7.png",
      "images/gonzalezFig8.png",
    ],
    figuresCaptions: [
      "(a) Annual mean rainfall (mm); (b) geographical distribution of the main land cover types in south-central Chile; (c) total number of ﬁres per grid-cell (5 9 5 km; Projection system WGS84 UTM 19S) during the period 1985–2015; (d) annual rainfall anomalies during the Megadrought (2010–2015) as a percentage of the historical norm (1980–2009). The administrative regions considered in the study indicated in c: Valparaíso (V), Metropolitana (M), O0 Higgins (VI), Maule (VII), Bío-Bío (VIII), and Araucanía (IX).",

      "(a) Annual mean rainfall (mm); (b) geographical distribution of the main land cover types in south-central Chile; (c) total number of ﬁres per grid-cell (5 9 5 km; Projection system WGS84 UTM 19S) during the period 1985–2015; (d) annual rainfall anomalies during the Megadrought (2010–2015) as a percentage of the historical norm (1980–2009). The administrative regions considered in the study indicated in c: Valparaíso (V), Metropolitana (M), O0 Higgins (VI), Maule (VII), Bío-Bío (VIII), and Araucanía (IX).",

      "Fire-season length for large ﬁres (>200 ha) in central and south-central Chile (from Valparaíso to Araucanía regions). The period of Megadrought (2010–2015; gray shading) compared with the previous 20 yr (1990–2009). Segmented lines indicate the average start and end of the ﬁre season for the period 1990–2009 (start: day 142 corresponds to the third week of November; end: day 293 corresponds to the third week of April). In the Y axis, the day = 0 (ﬁrst day of the ﬁre season) starts 1st of July and the day = 365 (last day of the ﬁre season of the following year) is 30th of June. X axis indicates the year of the end of the season (e.g., 2015 corresponds to the ﬁre season 2014–2015).",

      "Mean monthly distribution of (a) number of ﬁres and (b) burned area, both for large ﬁres (>200 ha) from Valparaíso to Araucanía regions. Megadrought period (2010–2015; black bars) is compared with the control period (1990–2009; gray bars). Lines on bars indicate standard errors. Statistically signiﬁcant differences between study periods (P < 0.05) using t or U tests are indicated by asterisks.", 
      
      "Mean maximum number of simultaneous ﬁres per month for (a) all ﬁres and (b) large ﬁres (>200 ha). Black bars represent the mean values for the Megadrought period (2010–2015) and gray bars are the mean for the control period (1990–2009). Lines on bars indicate standard errors. Statistically signiﬁcant differences between study periods (P < 0.05) using t or U tests are indicated by asterisks.",

      "Mean duration of (a) all ﬁres and (b) large ﬁres (>200 ha) in each season. For large ﬁres (b), only data for summer and fall seasons were available (Methods). Lines on bars indicate standard errors. Statistically signiﬁcant differences between study periods (P < 0.05) using t or U tests are indicated by asterisks.",

      "Mean number of ﬁres and burned area per year for different ﬁre size classes (a, c) and for large ﬁres (>200 ha, b, d). Black bars represent the mean values for the Megadrought period (2010–2015), and gray bars are the mean for the control period (1990–2009). Lines on bars indicate standard errors. Statistically signiﬁcant differences between study periods (P < 0.05) using t or U tests are indicated by asterisks.",

      "Average total burned area for large ﬁres (>200 ha) per region (left column) and for all combined regions (right column) by different vegetation cover types. Black bars correspond to the Megadrought period (2010–2015) and gray bars to the control period (1990–2009). All vegetation covers (a, b); native forest (c, d); plantation (e, f); shrubland (g, h); pasture (i, j). Lines on bars indicate standard errors. Statistically signiﬁcant differences between study periods (P < 0.05) using t or U tests are indicated by asterisks. Regions: Valparaíso (V), Metropolitana (RM), O0 Higgins (VI), Maule (VII), Bío-Bío (VIII), and Araucanía (IX).",

      "Scatter plot of the total area burned (TAB) and the maximum temperature index in central-south Chile (See section Attribution analysis for the deﬁnition of the variables). Each circle represents one ﬁre season, from 1976/1977 to 2014/2015, colored according to the rainfall anomaly during the simultaneous year. The horizontal (vertical) gray bar indicates the interquartile range of the TAB (maximum temperature); the horizontal (vertical) gray dashed line indicates the median of the TAB (maximum temperature). The horizontal, dashed orange line indicates the average TAB during the Megadrought (MD) period, and the individual values are highlighted. The inset to the left shows the climate-congruent TAB during the MD period obtained from linear regressions with the maximum temperature index (Tx), rainfall anomalies (aP), and both variables (All). The predictions (horizontal lines) are obtained by plugging in the MD average values. The boxes indicate the 95% conﬁdence level of each prediction.",

      "",
     
    ]
  }

]

export default papers;

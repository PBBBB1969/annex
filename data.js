var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior-parking-lot",
      "name": "Exterior Parking Lot",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.30593709533829383,
          "pitch": 0.09300402108693362,
          "rotation": 0,
          "target": "1-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-exterior",
      "name": "Exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.32965502399760815,
          "pitch": -0.012582481951042723,
          "rotation": 0,
          "target": "2-entry-atrium"
        },
        {
          "yaw": -1.5759705726893216,
          "pitch": 0.08552125397037713,
          "rotation": 5.497787143782138,
          "target": "7-bookmobile-ext"
        },
        {
          "yaw": 2.904126381790988,
          "pitch": 0.4926415782146414,
          "rotation": 0,
          "target": "0-exterior-parking-lot"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entry-atrium",
      "name": "Entry Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "yaw": -3.0458267320458283,
        "pitch": -0.06543270671472534,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.925416349770253,
          "pitch": 0.12539334654391965,
          "rotation": 4.71238898038469,
          "target": "3-left-of-entry-atrium"
        },
        {
          "yaw": -2.7840416256411498,
          "pitch": 0.09150259653852544,
          "rotation": 1.5707963267948966,
          "target": "16-right-of-entry-atrium"
        },
        {
          "yaw": 0.020761237204759198,
          "pitch": 0.44583745644005646,
          "rotation": 0,
          "target": "1-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-left-of-entry-atrium",
      "name": "Left of Entry Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "yaw": -3.0343615854585444,
        "pitch": 0.1424147072780393,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10655062407298566,
          "pitch": 0.2201420787699071,
          "rotation": 0,
          "target": "16-right-of-entry-atrium"
        },
        {
          "yaw": 0.7083000122007483,
          "pitch": 0.3993494258116108,
          "rotation": 0,
          "target": "2-entry-atrium"
        },
        {
          "yaw": 2.993131559124622,
          "pitch": 0.31822257636058815,
          "rotation": 0,
          "target": "4-bbmtalking-books"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bbmtalking-books",
      "name": "BBM/Talking Books",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "yaw": -1.4893689475334373,
        "pitch": 0.07762470748458838,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0259258607984059,
          "pitch": 0.3767694401362398,
          "rotation": 0,
          "target": "5-bbm"
        },
        {
          "yaw": 1.570677452010207,
          "pitch": 0.3837875629004124,
          "rotation": 0,
          "target": "3-left-of-entry-atrium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bbm",
      "name": "BBM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "yaw": -2.089320044016974,
        "pitch": 0.3875086466533997,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6969010612580817,
          "pitch": 0.5460920135555458,
          "rotation": 0,
          "target": "6-bookmobile-area-int"
        },
        {
          "yaw": 0.13907298774900312,
          "pitch": -0.04333783401110658,
          "rotation": 0,
          "target": "11-hallway"
        },
        {
          "yaw": 1.975124375614035,
          "pitch": 0.6593806137389819,
          "rotation": 0,
          "target": "4-bbmtalking-books"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bookmobile-area-int",
      "name": "Bookmobile Area Int",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "yaw": -1.7196667672968662,
        "pitch": 0.19068494538514713,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.039352447881999,
          "pitch": 0.6352782525262111,
          "rotation": 0,
          "target": "7-bookmobile-ext"
        },
        {
          "yaw": 1.2967110105456516,
          "pitch": 0.38607639736991395,
          "rotation": 0,
          "target": "5-bbm"
        },
        {
          "yaw": -1.6013271939331872,
          "pitch": 0.30972046072824355,
          "rotation": 0,
          "target": "8-community-engagement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bookmobile-ext",
      "name": "Bookmobile Ext",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "yaw": -0.5479741225744537,
        "pitch": 0.13378294706917515,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.101651506618099,
          "pitch": 0.22041362517037832,
          "rotation": 0,
          "target": "1-exterior"
        },
        {
          "yaw": 1.000105305372415,
          "pitch": 0.5759904977517607,
          "rotation": 7.0685834705770345,
          "target": "6-bookmobile-area-int"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-community-engagement",
      "name": "Community Engagement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "yaw": 0.5175553896659206,
        "pitch": 0.10379711410539372,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2028024396764785,
          "pitch": 0.4563428408424066,
          "rotation": 0,
          "target": "6-bookmobile-area-int"
        },
        {
          "yaw": 2.692000528223244,
          "pitch": 0.49559337943551185,
          "rotation": 0,
          "target": "9-scs-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-scs-1",
      "name": "SCS 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8455572224314203,
          "pitch": 0.3417167665525369,
          "rotation": 0,
          "target": "8-community-engagement"
        },
        {
          "yaw": -0.3472518954523842,
          "pitch": 0.2988688300353459,
          "rotation": 0.7853981633974483,
          "target": "10-scs-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-scs-2",
      "name": "SCS 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2304483174129164,
          "pitch": 0.5100314037909826,
          "rotation": 5.497787143782138,
          "target": "9-scs-1"
        },
        {
          "yaw": 1.0215673842711546,
          "pitch": 0.21461579196109248,
          "rotation": 0,
          "target": "12-material-sorting"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0329366407424168,
          "pitch": 0.3730381054147074,
          "rotation": 0,
          "target": "5-bbm"
        },
        {
          "yaw": -2.1968392511220713,
          "pitch": 0.3221549391753804,
          "rotation": 0,
          "target": "12-material-sorting"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-material-sorting",
      "name": "Material Sorting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "yaw": 0.10852844799661199,
        "pitch": 0.16376878003296014,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3093393455443056,
          "pitch": 0.16287060172021484,
          "rotation": 0,
          "target": "10-scs-2"
        },
        {
          "yaw": -2.460272892587927,
          "pitch": 0.2682776933919815,
          "rotation": 4.71238898038469,
          "target": "11-hallway"
        },
        {
          "yaw": 0.945296238769938,
          "pitch": 0.23120148983017508,
          "rotation": 0,
          "target": "13-receivingacquisitions"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-receivingacquisitions",
      "name": "Receiving/Acquisitions",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9350873112920048,
          "pitch": 0.1366801088571279,
          "rotation": 0,
          "target": "12-material-sorting"
        },
        {
          "yaw": 0.9793405573930034,
          "pitch": 0.45115121408929326,
          "rotation": 0,
          "target": "14-acquisitions"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-acquisitions",
      "name": "Acquisitions",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.293621411177833,
          "pitch": 0.3041915100753947,
          "rotation": 11.780972450961727,
          "target": "13-receivingacquisitions"
        },
        {
          "yaw": -1.9273111783080097,
          "pitch": 0.14844766963662082,
          "rotation": 7.0685834705770345,
          "target": "15-technical-services"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-technical-services",
      "name": "Technical Services",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7542331915928564,
          "pitch": 0.280344335870641,
          "rotation": 0,
          "target": "14-acquisitions"
        },
        {
          "yaw": 3.0654398292474614,
          "pitch": 0.37533811872909695,
          "rotation": 0.7853981633974483,
          "target": "16-right-of-entry-atrium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-right-of-entry-atrium",
      "name": "Right of Entry Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0355148519488573,
          "pitch": 0.31731863961818974,
          "rotation": 0.7853981633974483,
          "target": "2-entry-atrium"
        },
        {
          "yaw": -0.6939943980772796,
          "pitch": 0.3381214631175453,
          "rotation": 1.5707963267948966,
          "target": "3-left-of-entry-atrium"
        },
        {
          "yaw": -1.8692918775594034,
          "pitch": 0.3760556735007512,
          "rotation": 4.71238898038469,
          "target": "15-technical-services"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Annex Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

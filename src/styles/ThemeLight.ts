import { lighten } from "polished";

import { baseColors } from "./BaseColors";


export const mainColors = {
    hue      : baseColors.blue90,
    tint     : baseColors.amber,
    shade    : baseColors.grey,
    analogue : baseColors.indigo50,
    accent   : baseColors.green80,
}

export const FRLightTheme = {
    mainColors,

    //  BASICS  ///////////////////////////////////////////////////////////////
    body : {
        bg : baseColors.white,
    },


    //  TEXT  /////////////////////////////////////////////////////////////////
    text : {
        font : {
            sans  : "sans-serif",
            serif : "serif",
            mono  : "monospace",
        },

        paras : {
            size       : 1,
            color      : baseColors.grey,
            weight     : 400,
            lineHeight : 1.64,
        },

        headings : {
            font       : "sans-serif",
            color      : mainColors.shade,
            weight     : 600,
            multiplier : 1.24,
            lineHeight : 1.24
        },

        links : {
            default : {
                color : baseColors.blue90,
            },
            onHover : {
                color : baseColors.blue60
            }
        },

        selection : {
            bg   : mainColors.hue,
            text : baseColors.white
        },

        code : {
            inline : {
                bg    : baseColors.blue10,
                text  : baseColors.blue90,
                scale : 80
            },
            block : {
                bg         : `${lighten(0.02, baseColors.slate10)}`,
                text       : baseColors.blue70,
                scale      : 80,
                lineHeight : 1.8
            },
            prism : {
                tokens : {
                    tag         : baseColors.violet,
                    atrule      : baseColors.teal90,
                    attrName    : baseColors.orange,
                    attrValue   : baseColors.green80,
                    boolean     : baseColors.green80,
                    cdata       : baseColors.grey70,
                    className   : baseColors.red,
                    comment     : baseColors.grey70,
                    constant    : baseColors.green80,
                    deleted     : baseColors.slate80,
                    delimiter   : baseColors.grey90,
                    doctype     : baseColors.grey90,
                    entity      : baseColors.green80,
                    function    : baseColors.orange,
                    hexcode     : baseColors.green,
                    inserted    : baseColors.green80,
                    italic      : baseColors.green80,
                    keyword     : baseColors.orange90,
                    namespace   : baseColors.green80,
                    number      : baseColors.green80,
                    operator    : baseColors.pistachio,
                    plain       : baseColors.grey,
                    prolog      : baseColors.grey90,
                    property    : baseColors.red90,
                    punctuation : baseColors.grey60,
                    regex       : baseColors.green80,
                    selector    : baseColors.violet,
                    string      : baseColors.crimson60,
                    symbol      : baseColors.green80,
                    url         : baseColors.green80,
                    variable    : baseColors.orange80,
                },

                languages : {
                    css : {
                        fallback : baseColors.orange90
                    },
                    html : {
                        fallback : baseColors.grey
                    },
                    js : {
                        fallback : baseColors.violet90
                    },
                    json : {
                        fallback : baseColors.teal,
                        tokens   : {
                            string : baseColors.teal
                        }
                    }
                }
            }
        },

        kbd : {
            text : baseColors.grey,
            bg   : baseColors.grey10
        }
    },


    //  CARD  /////////////////////////////////////////////////////////////////
    card : {
        bg     : baseColors.white,
        border : baseColors.slate10
    },


    //  INFO PANEL  ///////////////////////////////////////////////////////////
    infoPanel : {
        bg     : baseColors.white,
        border : baseColors.slate20,
        dismissButton : {
            bg      : baseColors.white,
            color   : baseColors.slate90,
            content : "×"
        }
    },


    //  BREADCRUMBS  ///////////////////////////////////////////////////////////
    breadcrumb : {
        wrapper : {
            bg : baseColors.white,
        },
        item : {
            text      : mainColors.shade,
            separator : baseColors.slate40,
            active    : mainColors.shade,
            inactive  : mainColors.shade
        }
    },


    //  BUTTON  ///////////////////////////////////////////////////////////////
    button : {
        fontFamily: "sans-serif",
        primary : {
            default : {
                bg           : mainColors.hue,
                border       : mainColors.hue,
                text         : baseColors.white,
                borderRadius : "4px",
            },
            onHover : {
                bg     : mainColors.hue,
                border : mainColors.hue,
                text   : baseColors.white,
            },
            isActive : {
                bg     : mainColors.hue,
                border : mainColors.hue,
                text   : baseColors.white,
            },
            isLoading : {
                spinnerBorder : baseColors.white
            }
        },
        secondary : {
            default : {
                bg           : `${lighten(0.4, mainColors.hue)}`,
                border       : mainColors.hue,
                text         : mainColors.hue,
                borderRadius : "4px",
            },
            onHover : {
                bg     : `${lighten(0.32, mainColors.hue)}`,
                border : mainColors.hue,
                text   : mainColors.hue,
            },
            isActive : {
                bg     : `${lighten(0.2, mainColors.hue)}`,
                border : mainColors.hue,
                text   : mainColors.hue,
            },
            isLoading : {
                spinnerBorder : mainColors.hue,
            }
        }
    },


    //  RULE  /////////////////////////////////////////////////////////////////
    hr : {
        primary : {
            bg     : baseColors.blue80,
            height : "1px"
        },
        secondary : {
            bg     : baseColors.slate40,
            height : "1px"
        },
        tertiary : {
            bg     : baseColors.slate20,
            height : "1px"
        }
    },


    //  INPUT  ////////////////////////////////////////////////////////////////
    input : {
        default : {
            bg     : baseColors.white,
            border : baseColors.slate40,
            label  : mainColors.shade,
            text   : mainColors.shade
        },
        onFocus : {
            bg       : baseColors.white,
            border   : mainColors.hue,
            text     : mainColors.shade,
            helpText : mainColors.shade,
        },
        isValid : {
            bg     : baseColors.white,
            border : baseColors.green80,
            label  : mainColors.shade
        },
        isInvalid : {
            bg       : baseColors.red10,
            border   : baseColors.red80,
            label    : baseColors.red,
            helpText : baseColors.red,
        },
        isReadOnly : {
            bg     : baseColors.grey50,
            border : baseColors.grey50,
            label  : mainColors.shade
        },
        required : {
            text : baseColors.red
        },
        icons : {
            default : {
                fill : baseColors.slate30,
            },
            onFocus : {
                fill : mainColors.hue,
            },
            isValid : {
                bg     : baseColors.grey50,
                border : baseColors.red30,
            }
        },
        select : {
            chevron : mainColors.hue
        },
        radioButton : {
            default : {
            }
        }
    },


    //  SIDEBAR  //////////////////////////////////////////////////////////////
    sidebar : {
        isCollapsed : {
            label : {
                text : baseColors.white,
                bg   : mainColors.hue
            }
        },

        header : {
            bg           : baseColors.white,
            borderBottom : baseColors.slate10
        },

        body : {
            bg : baseColors.white,
        },

        icons : {
            stroked : {
                thickness : 2,
                default : {
                    line : baseColors.slate40,
                },
                onHover : {
                    line : baseColors.slate80,
                },
                isActive : {
                    line : baseColors.slate,
                }
            },
            filled : {
                default : {
                    bg : baseColors.slate40,
                },
                onHover : {
                    bg : baseColors.slate80,
                },
                isActive : {
                    bg : baseColors.slate,
                }
            }
        },

        links : {
            default : {
                bg     : baseColors.white,
                text   : mainColors.shade,
                scale  : 100,
                weight : 600,
            },
            onHover : {
                bg   : baseColors.slate10,
                text : mainColors.hue,
            },
            isSelected : {
                bg     : baseColors.white,
                border : mainColors.hue,
                text   : mainColors.hue,
            },
            hasAlert : {
                bg : baseColors.red70
            },
        },

        subLinks : {
            header : {
                weight : 600,
            },
            default: {
                bg     : baseColors.white,
                text   : `${lighten(0.24, mainColors.shade)}`,
                weight : 400,
                scale  : 92,
            },
            onHover : {
                bg   : baseColors.slate10,
                text : mainColors.hue
            },
            chevron : {
                border : baseColors.slate40
            }
        },



        footer : {
            bg        : baseColors.white,
            borderTop : baseColors.slate10
        }
    },


    //  NOTIFICATION  /////////////////////////////////////////////////////////
    notification : {
        default : {
            bg   : baseColors.slate10,
            text : mainColors.shade
        },
        types: {
            info : {
                border : baseColors.blue60,
            },
            warning : {
                border : baseColors.amber,
            },
            error : {
                border : baseColors.red90,
            },
            success : {
                border : baseColors.green90,
            }
        }
    },


    //  TABLE  ////////////////////////////////////////////////////////////////
    table : {
        bg      : baseColors.white,
        text    : mainColors.shade,
        border  : baseColors.slate40,
        striped : {
            header : {
                bg : baseColors.blue40,
            },
            cell : {
                bg : baseColors.slate20,
            }
        },
        onHover : {
            bg   : baseColors.amber20,
            text : mainColors.shade
        }
    },


    //  PROGRESS BAR  /////////////////////////////////////////////////////////
    progressBar : {
        bg     : baseColors.slate20,
        fill   : mainColors.hue,
        label  : mainColors.shade,
        value  : `${lighten(0.24, mainColors.shade)}`,
    }
}

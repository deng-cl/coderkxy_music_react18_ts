import styled from "styled-components";

// export const SectionWrapper = styled.div`
//     /* margin-bottom: 24px; */
//     user-select: none;

//    > .section {
//         margin-bottom: 14px;
//         > .icon {
//             display: flex;
//             align-items: center;
//             flex-wrap: nowrap;
//             padding: 12px 0;
//             padding-left: 14px;
//             margin: 2px 0;
//             border-radius: 6px;

//             .name {
//                 margin-left: 6px;
//             }
//         }

//         > .active {
//             background-color: ${props => props.theme.color.active};
//         }

//         > .route {
//             cursor: pointer;

//             &:hover {

//             }
//         }

//         > .title {
//             padding-left: 0px;
//         }
//    }
// `


export const SectionWrapper = styled.div`
    /* margin-bottom: 24px; */
    user-select: none;

   > .section {
        margin-bottom: 14px;
        > .icon {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            padding: 12px 0;
            padding-left: 14px;
            margin: 2px 0;
            border-radius: 6px;

            .name {
                margin-left: 6px;
            }
        }

        > .active {
            background-color: ${props => props.theme.color.active};
        }

        > .route {
            cursor: pointer;

            &:hover {

            }
        }

        > .title {
            padding-left: 0px;
        }
   }

// ----
   // -- new
    @media screen and (max-width: 1080px) { // --平板或手机
        > .entire-nav {
            margin-bottom: 14px;
            > .icon {
                display: flex;
                align-items: center;
                flex-wrap: nowrap;
                padding: 12px 0;
                padding-left: 14px;
                margin: 2px 0;
                border-radius: 6px;

                .name {
                    margin-left: 6px;
                }
            }

            > .active {
                background-color: ${props => props.theme.color.active};
            }

            > .route {
                cursor: pointer;

                &:hover {

                }
            }

            > .title {
                padding-left: 0px;
            }
        }
    }
`

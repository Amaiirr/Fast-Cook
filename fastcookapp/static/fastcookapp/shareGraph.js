
function main()
        {            
            // Defines an icon for creating new connections in the connection handler.
            // This will automatically disable the highlighting of the source vertex.
            //mxConnectionHandler.prototype.connectImage = new mxImage("/images/connector.gif", 16, 16);
            //var mxPopupMenuShowMenu = mxPopupMenu.prototype.showMenu;
            //mxDefaultPopupMenu.prototype.addItems = function(editor){editor = editor};

            //mxPopupMenu.prototype.addItem = function(</td><td class=PParameter nowrap>title,</td></tr><tr><td></td><td class=PParameter nowrap>image,</td></tr><tr><td></td><td class=PParameter nowrap>funct,</td></tr><tr><td></td><td class=PParameter nowrap>parent,</td></tr><tr><td></td><td class=PParameter nowrap>iconCls,</td></tr><tr><td></td><td class=PParameter nowrap>enabled</td><td class=PAfterParameters nowrap>)
            //console.log(mxPopupMenu.prototype.itemCount)

            $('#share').on('click',function(event){
                var encoder = new mxCodec();
                var node = encoder.encode(graph.getModel());
                xml = mxUtils.getXml(node)
                post('/share/', {sharedXMLData:xml});

                //alert("hey")
            });

            // Checks if browser is supported
            if (!mxClient.isBrowserSupported())
            {
                // Displays an error message if the browser is
                // not supported.
                mxUtils.error('Browser is not supported!', 200, false);
            }
            else
            {
                
                // Creates the model and the graph inside the container
                // using the fastest rendering available on the browser
                var sharedModel = new mxGraphModel();
                var sharedEditor = new mxEditor();
                var sharedGraph = new mxGraph(sharedContainer, sharedModel);
                sharedGraph.dropEnabled = true;

                sharedGraph.setEnabled(false);

                
                var style = new Object();

                style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
                style[mxConstants.STYLE_IMAGE] = '/images/icons/flour.png';
                style[mxConstants.STYLE_EDGE] = mxEdgeStyle.EntityRelation;
                style[mxConstants.STYLE_VERTICAL_LABEL_POSITION] = mxConstants.ALIGN_BOTTOM;
                style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_TOP;

                sharedGraph.getStylesheet().putCellStyle('rounded2', style);

                var sharedDiagramContainerClass = document.getElementsByClassName("diagramContainer")
                var sharedDiagramContainer = sharedDiagramContainerClass[0]


                sharedContainer = document.getElementById('sharedContainer');
                document.body.appendChild(sharedDiagramContainer);
                sharedDiagramContainer.appendChild(sharedContainer)


                var sharedXml = $("#sharedXMLData").val()
                console.log("hellooo" + sharedXml)
                var sharedXmlDoc = mxUtils.parseXml(sharedXml);
                var sharedNode = sharedXmlDoc.documentElement;
                var sharedDec = new mxCodec(sharedNode.ownerDocument);
                sharedDec.decode(sharedNode, sharedGraph.getModel());

            }

            

        }
import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GROUP_IOT_GREENGRASS = {
  _mxGraphModel:
    '<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="AWS Iot&#10;Greengrass" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_iot_greengrass;strokeColor=#7AA116;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#3F8624;dashed=0;" vertex="1" parent="1"><mxGeometry x="60" y="-611.5" width="130" height="130" as="geometry"/></mxCell></root></mxGraphModel>',
}

export function GroupIotGreengrass(props: DiagramNodeProps) {
  return <Shape {...GROUP_IOT_GREENGRASS} {...props} />
}

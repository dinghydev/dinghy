import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKSPACES_FAMILY_AMAZON_WORKSPACES = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.workspaces_family_amazon_workspaces;',
  _width: 78,
  _height: 73,
}

export function WorkspacesFamilyAmazonWorkspaces(props: DiagramNodeProps) {
  return <Shape {...WORKSPACES_FAMILY_AMAZON_WORKSPACES} {...props} />
}

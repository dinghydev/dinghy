import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKSPACES_SECURE_BROWSER = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.workspaces_workspaces_web;',
  },
  _original_width: 78,
  _original_height: 74,
}

export function WorkspacesSecureBrowser(props: NodeProps) {
  return (
    <Shape
      {...WORKSPACES_SECURE_BROWSER}
      {...props}
      _style={extendStyle(WORKSPACES_SECURE_BROWSER, props)}
    />
  )
}

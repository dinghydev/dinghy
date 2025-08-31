import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXPLORER_FOR_SHAREPOINT = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.veeam_explorer_for_sharepoint;',
  _width: 44.8,
  _height: 44.8,
}

export function ExplorerForSharepoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXPLORER_FOR_SHAREPOINT}
      {...props}
      _style={extendStyle(EXPLORER_FOR_SHAREPOINT, props)}
    />
  )
}

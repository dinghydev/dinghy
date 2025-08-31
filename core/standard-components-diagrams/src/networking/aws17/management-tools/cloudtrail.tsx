import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUDTRAIL = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cloudtrail;fillColor=#759C3E;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function Cloudtrail(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUDTRAIL} {...props} _style={extendStyle(CLOUDTRAIL, props)} />
  )
}

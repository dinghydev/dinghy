import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VCLOUD_DIRECTOR = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vcloud_director',
  },
  _width: 44.8,
  _height: 44.8,
}

export function VcloudDirector(props: DiagramNodeProps) {
  return (
    <Shape
      {...VCLOUD_DIRECTOR}
      {...props}
      _style={extendStyle(VCLOUD_DIRECTOR, props)}
    />
  )
}

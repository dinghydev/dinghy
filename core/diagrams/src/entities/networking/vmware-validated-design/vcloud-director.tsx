import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VCLOUD_DIRECTOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.vcloud_director;',
  },
  _width: 50,
  _height: 21.5,
}

export function VcloudDirector(props: NodeProps) {
  return (
    <Shape
      {...VCLOUD_DIRECTOR}
      {...props}
      _style={extendStyle(VCLOUD_DIRECTOR, props)}
    />
  )
}

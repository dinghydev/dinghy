import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.azure;',
  },
  _width: 103,
  _height: 66,
}

export function Azure(props: NodeProps) {
  return <Shape {...AZURE} {...props} _style={extendStyle(AZURE, props)} />
}

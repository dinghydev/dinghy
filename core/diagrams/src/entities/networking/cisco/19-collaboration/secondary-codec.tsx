import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECONDARY_CODEC = {
  _style: {
    entity:
      'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=secondary_codec;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _original_width: 64,
  _original_height: 50,
}

export function SecondaryCodec(props: NodeProps) {
  return (
    <Shape
      {...SECONDARY_CODEC}
      {...props}
      _style={extendStyle(SECONDARY_CODEC, props)}
    />
  )
}

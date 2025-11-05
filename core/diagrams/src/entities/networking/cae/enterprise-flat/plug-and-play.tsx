import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLUG_AND_PLAY = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.plug_and_play',
  },
  _original_width: 40,
  _original_height: 50,
}

export function PlugAndPlay(props: NodeProps) {
  return (
    <Shape
      {...PLUG_AND_PLAY}
      {...props}
      _style={extendStyle(PLUG_AND_PLAY, props)}
    />
  )
}

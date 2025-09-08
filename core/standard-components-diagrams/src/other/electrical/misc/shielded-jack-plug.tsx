import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHIELDED_JACK_PLUG = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.shielded_jack_plug',
  },
  _original_width: 50,
  _original_height: 100,
}

export function ShieldedJackPlug(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHIELDED_JACK_PLUG}
      {...props}
      _style={extendStyle(SHIELDED_JACK_PLUG, props)}
    />
  )
}

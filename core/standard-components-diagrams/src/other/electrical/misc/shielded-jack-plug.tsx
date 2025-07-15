import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHIELDED_JACK_PLUG = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.shielded_jack_plug',
  _width: 50,
  _height: 100,
}

export function ShieldedJackPlug(props: DiagramNodeProps) {
  return <Shape {...SHIELDED_JACK_PLUG} {...props} />
}

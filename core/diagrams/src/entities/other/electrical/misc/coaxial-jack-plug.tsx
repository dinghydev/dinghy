import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COAXIAL_JACK_PLUG = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.coaxial_jack_plug',
  },
  _width: 50,
  _height: 100,
}

export function CoaxialJackPlug(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COAXIAL_JACK_PLUG)} />
}

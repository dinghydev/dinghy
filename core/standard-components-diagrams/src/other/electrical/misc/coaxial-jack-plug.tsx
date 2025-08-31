import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COAXIAL_JACK_PLUG = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.coaxial_jack_plug',
  },
  _width: 50,
  _height: 100,
}

export function CoaxialJackPlug(props: DiagramNodeProps) {
  return (
    <Shape
      {...COAXIAL_JACK_PLUG}
      {...props}
      _style={extendStyle(COAXIAL_JACK_PLUG, props)}
    />
  )
}

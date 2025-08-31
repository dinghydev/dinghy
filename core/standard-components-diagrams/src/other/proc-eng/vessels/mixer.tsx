import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MIXER = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.mixer;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 20,
  _height: 88,
}

export function Mixer(props: DiagramNodeProps) {
  return <Shape {...MIXER} {...props} _style={extendStyle(MIXER, props)} />
}

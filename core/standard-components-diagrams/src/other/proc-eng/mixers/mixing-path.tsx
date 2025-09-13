import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MIXING_PATH = {
  _style: {
    entity:
      'shape=mxgraph.pid.mixers.mixing_path;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 260,
  _height: 100,
}

export function MixingPath(props: DiagramNodeProps) {
  return (
    <Shape
      {...MIXING_PATH}
      {...props}
      _style={extendStyle(MIXING_PATH, props)}
    />
  )
}

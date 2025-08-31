import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERATOR_DC = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.generator_(dc);fontSize=45;',
  },
  _width: 60,
  _height: 60,
}

export function GeneratorDc(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERATOR_DC}
      {...props}
      _style={extendStyle(GENERATOR_DC, props)}
    />
  )
}

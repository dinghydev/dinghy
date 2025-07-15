import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERATOR_DC = {
  _style:
    'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.generator_(dc);fontSize=45;',
  _width: 100,
  _height: 100,
}

export function GeneratorDc(props: DiagramNodeProps) {
  return <Shape {...GENERATOR_DC} {...props} />
}

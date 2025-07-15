import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERATOR_AC = {
  _style:
    'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.generator_(ac);fontSize=45;',
  _width: 100,
  _height: 100,
}

export function GeneratorAc(props: DiagramNodeProps) {
  return <Shape {...GENERATOR_AC} {...props} />
}

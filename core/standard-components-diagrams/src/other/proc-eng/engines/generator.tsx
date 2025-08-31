import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERATOR = {
  _style:
    'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.generator;fontSize=45;',
  _width: 60,
  _height: 60,
}

export function Generator(props: DiagramNodeProps) {
  return (
    <Shape {...GENERATOR} {...props} _style={extendStyle(GENERATOR, props)} />
  )
}

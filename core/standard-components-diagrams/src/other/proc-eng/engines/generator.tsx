import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GENERATOR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.generator;fontSize=45;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Generator(props: DiagramNodeProps) {
  return (
    <Shape {...GENERATOR} {...props} _style={extendStyle(GENERATOR, props)} />
  )
}

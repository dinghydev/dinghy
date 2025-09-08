import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOAD_TESTING = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.load_testing',
  },
  _original_width: 48,
  _original_height: 50,
}

export function LoadTesting(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOAD_TESTING}
      {...props}
      _style={extendStyle(LOAD_TESTING, props)}
    />
  )
}

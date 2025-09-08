import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_FLOW = {
  _style: {
    dependency: 'endArrow=classic;html=1;fontColor=#FF3333;',
  },
}

export function DataFlow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...DATA_FLOW}
      {...props}
      _style={extendStyle(DATA_FLOW, props)}
    />
  )
}

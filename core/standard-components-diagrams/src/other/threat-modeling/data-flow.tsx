import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

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

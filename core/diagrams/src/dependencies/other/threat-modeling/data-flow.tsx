import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_FLOW = {
  _style: {
    dependency: 'endArrow=classic;html=1;fontColor=#FF3333;',
  },
}

export function DataFlow(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, DATA_FLOW)} />
}

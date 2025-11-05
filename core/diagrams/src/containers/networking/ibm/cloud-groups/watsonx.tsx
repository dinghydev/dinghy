import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WATSONX = {
  _style: {
    container:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#A56EFF;fillColor=none;strokeWidth=1',
    entity: {
      strokeColor: '#A56EFF',
    },
  },
}

export function Watsonx(props: NodeProps) {
  return <Shape {...WATSONX} {...props} _style={extendStyle(WATSONX, props)} />
}

import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WATSONX = {
  _style: {
    group:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#A56EFF;fillColor=none;strokeWidth=1',
    entity: {
      strokeColor: '#A56EFF',
    },
  },
}

export function Watsonx(props: DiagramNodeProps) {
  return <Shape {...WATSONX} {...props} />
}

import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUSINESS_FUNCTION_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.function;',
  _width: 60,
  _height: 40,
}

export function BusinessFunction2(props: DiagramNodeProps) {
  return <Shape {...BUSINESS_FUNCTION_2} {...props} />
}

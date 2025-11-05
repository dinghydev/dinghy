import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERIC_GROUP = {
  _style: {
    container:
      'fillColor=none;strokeColor=#5A6C86;dashed=1;verticalAlign=top;fontStyle=0;fontColor=#5A6C86;whiteSpace=wrap;html=1;',
    entity: {
      strokeColor: '#5A6C86',
      fontColor: '#5A6C86',
    },
  },
}

export function GenericGroup(props: NodeProps) {
  return (
    <Shape
      {...GENERIC_GROUP}
      {...props}
      _style={extendStyle(GENERIC_GROUP, props)}
    />
  )
}

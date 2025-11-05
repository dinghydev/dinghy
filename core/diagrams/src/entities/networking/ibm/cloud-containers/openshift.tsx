import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPENSHIFT = {
  _style: {
    entity:
      'shape=rect;fillColor=#198038;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  },
  _width: 0,
  _height: 48,
}

export function Openshift(props: NodeProps) {
  return (
    <Shape {...OPENSHIFT} {...props} _style={extendStyle(OPENSHIFT, props)} />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLUEPRINTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Blueprints.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 64,
}

export function Blueprints(props: NodeProps) {
  return (
    <Shape {...BLUEPRINTS} {...props} _style={extendStyle(BLUEPRINTS, props)} />
  )
}

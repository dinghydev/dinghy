import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REGION = {
  _style: {
    container:
      'rounded=1;arcSize=10;dashed=1;fillColor=none;gradientColor=none;dashPattern=1 1;strokeWidth=2;',
  },
}

export function Region(props: NodeProps) {
  return <Shape {...REGION} {...props} _style={extendStyle(REGION, props)} />
}

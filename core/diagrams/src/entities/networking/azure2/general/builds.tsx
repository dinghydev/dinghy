import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUILDS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Builds.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function Builds(props: NodeProps) {
  return <Shape {...BUILDS} {...props} _style={extendStyle(BUILDS, props)} />
}

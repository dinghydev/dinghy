import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERSIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Versions.svg;strokeColor=none;',
  },
  _original_width: 62,
  _original_height: 60,
}

export function Versions(props: NodeProps) {
  return (
    <Shape {...VERSIONS} {...props} _style={extendStyle(VERSIONS, props)} />
  )
}

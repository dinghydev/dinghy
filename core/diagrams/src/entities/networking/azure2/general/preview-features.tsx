import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PREVIEW_FEATURES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Preview_Features.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function PreviewFeatures(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PREVIEW_FEATURES)} />
}

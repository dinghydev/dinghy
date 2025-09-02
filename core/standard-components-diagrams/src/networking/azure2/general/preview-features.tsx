import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PREVIEW_FEATURES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Preview_Features.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function PreviewFeatures(props: DiagramNodeProps) {
  return (
    <Shape
      {...PREVIEW_FEATURES}
      {...props}
      _style={extendStyle(PREVIEW_FEATURES, props)}
    />
  )
}

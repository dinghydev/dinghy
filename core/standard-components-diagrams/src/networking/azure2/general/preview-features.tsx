import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PREVIEW_FEATURES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Preview_Features.svg;',
  _width: 68,
  _height: 68,
}

export function PreviewFeatures(props: DiagramNodeProps) {
  return <Shape {...PREVIEW_FEATURES} {...props} />
}

import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REMOVABLE_TAG_LINK = {
  _style:
    'dashed=0;html=1;fillColor=#F0F2F5;strokeColor=none;align=left;rounded=1;arcSize=10;fontColor=#3384FF;fontStyle=1;fontSize=11;shadow=0;spacingLeft=3',
  _width: 0,
  _height: 20,
}

export function RemovableTagLink(props: DiagramNodeProps) {
  return (
    <Shape
      {...REMOVABLE_TAG_LINK}
      {...props}
      _style={extendStyle(REMOVABLE_TAG_LINK, props)}
    />
  )
}

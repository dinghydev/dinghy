import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDIA_ENCODING = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Media_Encoding.svg;strokeColor=none;',
  _width: 43,
  _height: 50,
}

export function MediaEncoding(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDIA_ENCODING}
      {...props}
      _style={extendStyle(MEDIA_ENCODING, props)}
    />
  )
}

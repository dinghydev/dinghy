import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEDIA_CONVERTER_STANDALONE_POE = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/media_converters/Media_Converter_Standalone_POE.svg;strokeColor=none;',
  },
  _width: 45.6,
  _height: 37.2,
}

export function MediaConverterStandalonePoe(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, MEDIA_CONVERTER_STANDALONE_POE)}
    />
  )
}

import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDIA_CONVERTER_STANDALONE_POE = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/media_converters/Media_Converter_Standalone_POE.svg;strokeColor=none;',
  },
  _original_width: 45.6,
  _original_height: 37.2,
}

export function MediaConverterStandalonePoe(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDIA_CONVERTER_STANDALONE_POE}
      {...props}
      _style={extendStyle(MEDIA_CONVERTER_STANDALONE_POE, props)}
    />
  )
}

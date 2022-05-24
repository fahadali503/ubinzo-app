import { FormLabel } from '@src/components/form/FormLabel'
import { Avatar, Box, Button, Divider, FormControl, HStack, Text, VStack } from 'native-base'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Card } from './Card'
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '@src/utils/colors';
import { RoundedButton } from '@src/components/buttons/RoundedButton';
import { Touchable, TouchableWithoutFeedback } from 'react-native';
import { ResizeMode, Video, Audio } from 'expo-av';
import { WizardProps } from '@src/utils/types/common.types';




type Props = {
    wizardRef: React.RefObject<WizardProps>
}
export default function Intro({ wizardRef }: Props) {
    const [files, setFiles] = useState<{ image: ImagePicker.ImageInfo | null, video: ImagePicker.ImageInfo | null }>({ image: null, video: null });

    const videoRef = useRef<Video>(null)
    useEffect(() => {
        const enableAudio = async () => {
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                playsInSilentModeIOS: true,
                staysActiveInBackground: false,
                shouldDuckAndroid: false,
            })
        }
        enableAudio();
    }, [])

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setFiles({ ...files, image: result });
        }
    };

    const pickVideo = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setFiles({ ...files, video: result });
        }
    };

    return (
        <Card justifyContent={'center'}>
            {/* Business Intro Heading */}
            <Text fontWeight={'semibold'} fontSize={17}>Business Intro</Text>
            {/* Media Type */}
            <VStack px={2} py={1}>
                <FormControl>
                    <FormLabel text='Upload Business Image' />
                    {files.image ?
                        <TouchableWithoutFeedback onPress={() => setFiles({ ...files, image: null })}>
                            <Avatar my={2} alignSelf={'center'} size={'lg'} source={{ uri: files.image.uri }} />
                        </TouchableWithoutFeedback>
                        :
                        <Button onPress={pickImage} size="lg" variant="ghost">
                            Upload Image
                        </Button>
                    }
                </FormControl>
            </VStack>
            <VStack px={2} py={1} mb={2}>
                <FormControl isRequired={false}>
                    <FormLabel text='Introduction Video' />
                    <Box w={'50%'} alignSelf={'center'}>
                        {files.video ? <TouchableWithoutFeedback onPress={() => setFiles({ ...files, video: null })}>
                            <Video useNativeControls resizeMode={ResizeMode.CONTAIN}
                                isMuted={false}
                                shouldPlay
                                ref={videoRef}
                                style={{ width: '100%', height: 200 }} source={{ uri: files.video.uri }} />
                        </TouchableWithoutFeedback> :
                            <Button onPress={pickVideo} size="lg" variant="ghost">
                                Upload Video
                            </Button>}
                    </Box>
                </FormControl>

                <Divider borderColor={'gray.300'} borderBottomWidth={1} w={'full'} />
            </VStack>
            <HStack >
                <RoundedButton onPress={() => wizardRef.current?.prev()} w={'40%'} backgroundColor={'transparent'} text='Back' />
                <RoundedButton onPress={() => wizardRef.current?.next()} w={'40%'} backgroundColor={Colors.blueBackgroundColor} _text={{ color: 'white', fontWeight: 'semibold', fontSize: 'xl' }} text='Next' />
            </HStack>
        </Card>
    )
}
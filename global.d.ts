declare global {
      interface Window {
        Spotify: {
          Player: new (options: {
            name: string;
            getOAuthToken: (cb: (token: string) => void) => void;
            volume: number;
          }) => Spotify.Player;
        };
      }
    
      namespace Spotify {
        interface Player {
          connect: () => Promise<boolean>;
          disconnect: () => void;
          addListener: (
            event: string,
            callback: (data: { device_id: string } | { message: string }) => void
          ) => void;
          togglePlay: () => void;
        }
      }
    }
    
    export {};
    
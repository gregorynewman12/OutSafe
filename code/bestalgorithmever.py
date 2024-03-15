string1 = "The quick brown fox jumped over the lazy dog and then it went to the zoo to find a monkey."
string2 = "Hello World!"
string3 = "IsThisReallyGoingToWorkDoYouThink?"

string = string3

print("String: " + string)
lastIndex = 0
if len(string) < 18:
    print(string)
    exit()
else:
    substring = string[lastIndex:lastIndex+18]
moreChars = True
while moreChars:
    for i in range(len(substring) - 1, -1, -1):
        if substring[i] == " ":
            print(substring[0:i])
            lastIndex = lastIndex + i + 1
            substring = string[lastIndex:]
            if len(substring) < 18:
                print(substring)
                moreChars = False
                break
            else:
                substring = string[lastIndex:lastIndex+18]
            break
        if i == 0:
            print(substring)
            lastIndex = len(substring)
            substring = string[lastIndex:]
            if len(substring) < 18:
                print(substring)
                moreChars = False
                break
            else:
                substring = string[lastIndex:lastIndex+18]
